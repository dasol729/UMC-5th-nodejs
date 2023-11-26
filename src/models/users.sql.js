export const insertReviewSql = "INSERT INTO review (id, id2, user_id, score, description, write_at) VALUES (?, ?, ?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE review_id = ?";

export const confirmRestaurant = "SELECT EXISTS(SELECT 1 FROM restaurant WHERE id = ?) AS isExistRestaurant";

export const getReviewByUser = 
"SELECT user_id, review_id, score, description "
+ "FROM review "
+ "WHERE user_id = ? AND review_id < ? "
+ "ORDER BY review_id DESC LIMIT ? ;"

export const getReviewByUserAtFirst = 
"SELECT user_id, review_id, score, description "
+ "FROM review "
+ "WHERE user_id = ? "
+ "ORDER BY review_id DESC LIMIT ? ;"