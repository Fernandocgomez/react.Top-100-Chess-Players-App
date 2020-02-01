class CreateStatistics < ActiveRecord::Migration[6.0]
  def change
    create_table :statistics do |t|
      t.integer :chessplayer_id
      t.string :period
      t.string :position

      t.timestamps
    end
  end
end
