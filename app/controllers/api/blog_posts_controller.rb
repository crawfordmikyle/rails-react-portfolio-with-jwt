class Api::BlogPostsController < ApplicationController
  before_action :authenticate_user, except: [:index]

  def index
    blog_posts = BlogPost.all
    render json: blog_posts, status: 200
  end 

  def create
    blog_post = BlogPost.create(blog_post_params)
    if blog_post.save
      render json: blog_post, status: 200
    else
      render json: {message: "error"}, status: 400
    end 
  end 

  def update

  end 

  def destroy

  end 

  private

  def set_blog_post

  end 

  def blog_post_params
    params.require(:blog_post).permit(:title, :body)
  end 

end
