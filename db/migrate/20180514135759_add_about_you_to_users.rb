class AddAboutYouToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :about_you, :text
  end
end
