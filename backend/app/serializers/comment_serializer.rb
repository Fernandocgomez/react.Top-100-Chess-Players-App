class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :chessplayer_id, :content, :username
end
