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

<<<<<<< HEAD
    @result = client.search('airplane', prefix: true)
    @result2 = client.entry('airplane')
=======
    @string = params[:word]
    result =  client.search(@string,prefix: true)
    if result.results == []
      puts 'you fail'
      render "/"
    else
      puts "success"
      redirect_to "/"
    end
>>>>>>> 39d7dd724aadaa1186062e8d669e8dcb0d9ced45
  end

  def new

  end


end
