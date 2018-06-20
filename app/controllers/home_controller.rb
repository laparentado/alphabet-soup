class HomeController < ApplicationController
  require 'oxford_dictionary'
  require 'json'

  def index
    client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    @result = ""
  end


  def posting
    client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])

    @string = params[:word]
    result =  client.search(@string,prefix: true)
    if result.results == []
      puts 'you fail'
      render "/"
    else
      puts "success"
      redirect_to "/"
    end
  end

  def new

  end


end
