# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all 
Chessplayer.destroy_all 
Comment.destroy_all
Statistic.destroy_all 


require 'csv'

CSV.foreach(Rails.root.join('lib/tasks/db.csv'), :encoding => 'windows-1251:utf-8', headers: true) do |row|
  Chessplayer.create! do |mode|
  mode.name = row[0]
  mode.worldrank = row[1]
  mode.country = row[2]
  mode.birthyear = row[3]
  mode.sex = row[4]
  mode.title = row[5]
  mode.img = row[6]
  end
end

CSV.foreach(Rails.root.join('lib/tasks/stats.csv'), :encoding => 'windows-1251:utf-8', headers: true) do |row|
  Statistic.create! do |mode|
  mode.chessplayer_id = row[0]
  mode.period = row[1]
  mode.position = row[2]
  end
end

# test_comment = Comment.create(user_id: 1, chessplayer_id: 1, content: 'test')

