#!/usr/bin/env rake
require "bundler/gem_tasks"
require "bundler/setup"

file "lib/parsejs/grammar.kpeg.rb" => "lib/parsejs/grammar.kpeg" do
  sh "kpeg -f lib/parsejs/grammar.kpeg --stand-alone --debug"
end

task :compile => "lib/parsejs/grammar.kpeg.rb"

task :default => :compile
