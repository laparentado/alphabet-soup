class HomeController < ApplicationController
  require 'oxford_dictionary'
  require 'json'

  def index
    client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])

    @word = cookies[:title]
  end


  def posting
    client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
    @current_user = current_user.id
    @string = params[:word]
    result =  client.search(@string,prefix: true)
    @display_arr = []
    if result.results == []
      puts 'you fail'
    elsif result.results != []

      @length = @string.length - 2
      @word = Word.create(title: @string,user_id: @current_user,points: @length)
<<<<<<< HEAD
      @display_arr.push(@string)
=======
      cookies[:title] = @word.title

>>>>>>> 93b6ddd1ed84220b69a7a1c3aa9d8562e3251f4b
    end
  end



  def new

  end

end
