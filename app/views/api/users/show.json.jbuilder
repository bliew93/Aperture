json.users do
  json.partial! 'api/users/user', user:@user
  json.about_you @user.about_you
  json.cover_photo_id @user.cover_photo_id
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo:photo
    end
  end
end
