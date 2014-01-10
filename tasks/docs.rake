namespace :docs do
  task :directory do
    mkdir_p "doc"
  end

  desc "Build API documentation"
  task :api => :directory do
    ENV['SITEMAP_BASEURL'] = 'http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/'

    rm_rf "doc/latest"
    args = ENV['ARGS'] ? ENV['ARGS'] : []
    sh "bundle exec yard #{args.join(' ')}"
  end

  desc "Build guide documentation"
  task :guide => :directory do
    ENV['SITEMAP_BASEURL'] = 'http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/'

    rm_rf "doc/guide"
    args = %w(-q --yardopts .yardopts_guide)
    args += ENV['ARGS'].split(/\s+/) if ENV['ARGS']
    sh "bundle exec yard #{args.join(' ')}"
  end

  desc "Builds API and guide documentation"
  task :all => [:api, :guide]
end

desc "Builds all documentation"
task :docs => ['docs:all']
