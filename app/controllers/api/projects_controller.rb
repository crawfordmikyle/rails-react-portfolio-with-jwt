class Api::ProjectsController < ApplicationController
  before_action :authenticate_api_user

  def index
    render :json => {"message": "got it"} 
  end 
end
