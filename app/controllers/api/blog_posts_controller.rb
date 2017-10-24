class Api::BlogPostsController < ApplicationController
before_action :authenticate_api_user

def index
  blog_posts = BlogPost.all
  render json: blog_posts, status: 200
end 

end
