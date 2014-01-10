def init
  super
  sections.place(:services).before_any(:objects)
end

def services
  ids = {}
  svcs = Registry.all(:class).select {|x| x.has_tag?(:service) }
  svcs.each do |svc|
    id = svc.tag(:service).text
    (ids[id] ||= []) << svc
  end

  @services = ids.sort_by {|id| id }
  erb(:services)
end

def index
  @objects_by_letter = {}
  objects = Registry.all(:class, :module).sort_by {|o| o.name.to_s }
  objects = run_verifier(objects)
  objects = objects.reject {|x|
    next(false) unless x.respond_to?(:superclass)
    x.respond_to?(:superclass) && x.superclass.path =~ /^AWS\.(Service|Client)$/
  }
  objects.each {|o| (@objects_by_letter[o.name.to_s[0,1].upcase] ||= []) << o }
  erb(:index)
end
