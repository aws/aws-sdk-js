def init
  super
  @waiters = object.children.select {|x| x.type == :waiter }
  if @waiters.size > 0
    sections.place(:waiter_summary).before_any(:constant_summary)
    sections.push(:waiter_details_list, [T('waiter_details')])
  end
end

