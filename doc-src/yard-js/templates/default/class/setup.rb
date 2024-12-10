def constructor_details
  object.inheritance_tree.find do |superclass|
    next if superclass.type == :proxy
    ctor = superclass.child(:name => :constructor)
    if ctor && !prune_method_listing([ctor]).empty?
      @ctor = ctor
      break
    end
  end
  erb(:constructor_details) if @ctor
end
