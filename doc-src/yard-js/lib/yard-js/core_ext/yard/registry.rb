module YARD
  module Registry
    def self.resolve(namespace, name, inheritance = false, proxy_fallback = false, type = nil)
      if namespace.is_a?(CodeObjects::Proxy)
        return proxy_fallback ? CodeObjects::Proxy.new(namespace, name, type) : nil
      end

      if namespace == :root || !namespace
        namespace = root
      else
        namespace = namespace.parent until namespace.is_a?(CodeObjects::NamespaceObject)
      end
      orignamespace = namespace

      name = name.to_s.sub(/^\./, '')
      nss = namespace.path.split('.')
      nss = [] if nss == ['']
      while nss.size >= 0
        if obj = at((nss + [name]).compact.join('.'))
          return obj
        end
        break if nss.size == 0
        nss.pop
      end

      proxy_fallback ? CodeObjects::Proxy.new(orignamespace, name, type) : nil
    end
  end
end
