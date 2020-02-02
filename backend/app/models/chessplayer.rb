class Chessplayer < ApplicationRecord
    has_many :comments
    has_many :statistics
end
