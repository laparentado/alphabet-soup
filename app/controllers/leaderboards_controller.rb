class LeaderboardsController < ApplicationController
  def index
    @scores = Score.all

  end


  
end
