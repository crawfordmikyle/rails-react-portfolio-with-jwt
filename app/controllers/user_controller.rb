class UserController < ApplicationController
  def create
    if User.create(user_params)
      render json: 'user created', status: 200
    else 
      render json: 'error', status: 500
    end 
  end 

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end 
end
