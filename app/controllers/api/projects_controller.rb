class Api::ProjectsController < ApplicationController
  before_action :authenticate_v1_user

  def index
    render :json => {"message": "got it"} 
  end 
end
