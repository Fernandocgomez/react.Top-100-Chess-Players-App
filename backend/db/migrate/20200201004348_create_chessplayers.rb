class CreateChessplayers < ActiveRecord::Migration[6.0]
  def change
    create_table :chessplayers do |t|
      t.string :name
      t.integer :worldrank
      t.string :country
      t.integer :birthyear
      t.string :sex
      t.string :title
      t.string :img

      t.timestamps
    end
  end
end
