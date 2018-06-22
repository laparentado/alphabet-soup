class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @words = Word.where(user_id: @user.id)
  end
end
