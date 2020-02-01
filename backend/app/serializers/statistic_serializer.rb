class StatisticSerializer < ActiveModel::Serializer
  attributes :id, :chessplayer_id, :period, :position
end
