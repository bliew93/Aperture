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
  json.partial! 'api/users/user', user:@photo.user
end
