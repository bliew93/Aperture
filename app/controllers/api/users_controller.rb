class Api::UsersController < ApplicationController
  def index
    @users = current_user.followees
    render 'api/users/index'
  end

  def show
    @user = User.find(params[:id])

    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow_user
    follow = Follow.new(user_id: current_user.id, followee_id: params[:id])
    follow.save if !Follow.find_by(user_id: follow.user_id, followee_id: follow.followee_id)
  end

  def unfollow_user
    follow = Follow.find_by(followee_id: params[:id])
    follow.destroy!
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
