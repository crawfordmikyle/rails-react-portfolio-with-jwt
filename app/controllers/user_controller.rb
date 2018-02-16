class UserController < ApplicationController
  def create
    user = User.create(user_params)
    binding.pry
  end 

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end 
end
