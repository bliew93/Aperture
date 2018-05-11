json.extract! photo, :id, :user_id, :title, :body
json.image_url asset_path(photo.image.url)
