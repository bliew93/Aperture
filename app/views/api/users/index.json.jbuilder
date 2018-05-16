@users.each do |user|
  json.users do
    json.set! user.id do
      json.extract! user, :id, :username
      json.image_url asset_path(user.avatar.url)
    end
  end

  json.photos do
    user.photos.each do |photo|
      json.set! photo.id do
        json.partial! 'api/photos/photo', photo:photo
      end
    end
  end
end
