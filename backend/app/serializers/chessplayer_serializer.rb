class ChessplayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :worldrank, :country, :birthyear, :sex, :title, :img
end
