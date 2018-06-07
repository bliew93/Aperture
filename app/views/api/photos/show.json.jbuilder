json.photos do
  json.partial! 'api/photos/photo', photo: @photo
  json.photo_ids @photo.comment_ids
end

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment:comment
    end
  end
end

json.users do
  json.set! @photo.user.id do
    json.partial! 'api/users/user', user:@photo.user
  end
  @photo.comments.each do |comment|
    json.set! comment.user.id do
      json.extract! comment.user, :id, :username
      json.image_url asset_path(comment.user.avatar.url)
    end
  end
end
