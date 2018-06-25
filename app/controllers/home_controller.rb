class HomeController < ApplicationController
  require 'oxford_dictionary'
  require 'json'



  def index
    def posting
      client = OxfordDictionary::Client.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
      client = OxfordDictionary.new(app_id: ENV["dictionary_id"], app_key: ENV["dictionary_key"])
      @current_user = current_user.id
      @string = params[:word]
      result =  client.search(@string,prefix: true)
      @display_arr = []
      if result.results == []
        puts 'you fail'
        head :ok

      elsif result.results != []
        @length = @string.length - 2
        @word = Word.create(title: @string,user_id: @current_user,points: @length)
        @final = Word.all
        head :ok
      end
    end
  end






  def new

  end

end
