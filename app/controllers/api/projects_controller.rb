class Api::ProjectsController < ApplicationController
  before_action :authenticate_api_user

  def index
    projects = Projects.all
    render json: projects, status: 200
  end 

  def create
    project = Project.create(project_params)
    if project 
      project.save
      render json: project, status: 200
    else
      render json: {message: "error"}, status: 400
    end 
  end

  def destroy
    set_project
    if @project
      @project.delete
      render json: {message: "project deleted"}, status: 200
    else 
      render json: {message: "I can't find that project"}, status: 400
    end
  end  

  private

  def set_project
    @project = Project.find_by_id(params[:id])
  end 

  # def project_params
  #   params.require(:project).permit(title:, description:)
  # end
end
