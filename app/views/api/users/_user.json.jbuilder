json.extract! user, :id, :username, :followee_ids, :follower_ids
json.image_url asset_path(user.avatar.url)
