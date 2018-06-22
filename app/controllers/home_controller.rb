class HomeController < ApplicationController
  require 'oxford_dictionary'
  require 'json'

  def index
    client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    puts " I am trying to print it here "
  puts @answer
  end


  def posting
    client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    @current_user = current_user.id
    @string = params[:word]
    result =  client.search(@string,prefix: true)
    @display_arr = []
    if result.results == []
      puts "you fail"
    else
      @length = @string.length - 2
      @word = Word.create(title: @string,user_id: @current_user,points: @length)
      @display_arr.push(@string)
    end
  end



  def new

  end

end
