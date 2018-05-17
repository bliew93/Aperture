json.extract! user, :id, :username, :about_you, :cover_photo_id, :followee_ids, :follower_ids
json.image_url asset_path(user.avatar.url)
