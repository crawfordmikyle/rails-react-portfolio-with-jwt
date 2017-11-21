class Api::MessagesController < ApplicationController

  def index
    messages = Message.all
    render :json messages, status: 200
  end 

  def create
    message = BlogPost.create(blog_post_params)
    if message.save
      render json: message, status: 200
    else
      render json: {message: "error"}, status: 400
    end 
  end 

  def destroy
    if @message.delete
      render json: {message: "blog post deleted"}
    else
      render json: {message: "error"}, status: 400
    end 
  end 

private

  def set_message
    @message = Message.find_by_id(params[:id])
  end 

  def message_params
    params.require(:message).permit(:sender_name, :sender_email, :sender_phone, :sender_messages)
  end
  
end