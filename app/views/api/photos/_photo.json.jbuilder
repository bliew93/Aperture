json.extract! photo, :id, :image_url, :user_id, :title, :body
json.image_url asset_path(photo.image.url)
