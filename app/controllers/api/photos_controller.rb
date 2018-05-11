class Api::PhotosController < ApplicationController
  def index
    # Will change this to only show all of current user's photos and
    # current user's followed users photos on home feed
    @photos = Photo.all
    render 'api/photos/index'
  end

  def create
    @photo = current_user.photos.create(photo_params)
    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render 'api/photos/show'
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render 'api/photos/show'
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :body)
  end
end
