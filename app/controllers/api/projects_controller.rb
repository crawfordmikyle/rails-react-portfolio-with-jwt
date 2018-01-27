class Api::ProjectsController < ApplicationController
  before_action :authenticate_user, except: [:index]

  def index
    projects = Project.all
    render json: projects, status: 200
  end 

  def create
    project = Project.create(project_params)
    if project.save
      render json: project, status: 200
    else
      render json: {message: "error"}, status: 400
    end 
  end

  def update
    set_project
    if @project.update(project_params)
      render json: @project
    else 
      render json: {message: "error"}, status: 400
    end 
  end 

  def destroy
    set_project
    if @project
      project_id = @project.id
      @project.delete
      render json: {message: "project deleted",projectId: project_id.to_s}, status: 200
    else 
      render json: {message: "I can't find that project"}, status: 400
    end
  end  

  private

  def set_project
    @project = Project.find_by_id(params[:id])
  end 

  def project_params
    params.require(:project).permit(:title, :description, :github_url)
  end

end
