def param
  tag(:param) if [:property, :event, :waiter].include?(object.type)
end
