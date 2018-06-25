class UsersController < ApplicationController
  def show
    @player = User.find(params[:id])
    @words = Word.where(user_id: @player.id)
  end
end
