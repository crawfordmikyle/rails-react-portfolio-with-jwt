class Api::ProjectsController < ApplicationController
  before_action :authenticate_api_user

  def index
    projects = Projects.all
    render :json => projects
  end 

  def create

  end

  def destroy
    set_project
    if @project
      @project.delete
      render :json => {"message" : "project deleted"}, status: 200
    else 
      remder :json => {"message" : "I can't find that project"}, status: 400
    end
  end  

  private

  def set_project
    @project = Project.find_by_id(params[:id])
  end 

end
