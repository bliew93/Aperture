json.photos do
  json.partial! 'api/photos/photo', photo: @photo
end

json.comments do
  @photo.comments.each do |comment|
    json.partial! 'api/comments/comment', comment:comment
  end
end
