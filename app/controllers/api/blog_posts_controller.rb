class Api::BlogPostsController < ApplicationController
  before_action :authenticate_user, except: [:index]

  def index
    blog_posts = BlogPost.all
    render json: blog_posts, status: 200
  end 

  def create
    blog_post = BlogPost.create(blog_post_params)
    blog_post.save
  end 

  def update

  end 

  def destroy

  end 

  private

  def set_blog_post

  end 

  def blog_post_params

  end 

end
