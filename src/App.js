import "./App.css";

import { BsSearch, BsThreeDots } from "react-icons/bs";
import {
	AiOutlineHome,
	AiOutlinePlus,
	AiOutlineVideoCamera,
	AiOutlineLike,
} from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { BiVideoPlus, BiStoreAlt, BiVideo } from "react-icons/bi";
import { stories, friends, feeds } from "./data";
import { useState, useContext } from "react";
import { userContext } from "./userContext";
function App() {
	const context = useContext(userContext);

	return (
		<div className="App">
			<div className="header">
				<div className="header_left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
						className="header_left_logo"
					/>
					<div className="header_left_search">
						<BsSearch className="header_left_search_icon" />
					</div>
				</div>
				<div className="header_combine">
					<div className="header_center">
						<div className="header_center_option">
							<AiOutlineHome className="header_center_option_icon" />
						</div>
						<div className="header_center_option">
							<AiOutlineHome className="header_center_option_icon" />
						</div>
						<div className="header_center_option">
							<AiOutlineHome className="header_center_option_icon" />
						</div>
						<div className="header_center_option">
							<AiOutlineHome className="header_center_option_icon" />
						</div>
						<div className="header_center_option">
							<AiOutlineHome className="header_center_option_icon" />
						</div>
					</div>
					<div className="header_right">
						<div className="header_right_option">
							<AiOutlinePlus className="header_right_option_icon" />
						</div>
						<div className="header_right_option">
							<AiOutlinePlus className="header_right_option_icon" />
						</div>
						<div className="header_right_option">
							<AiOutlinePlus className="header_right_option_icon" />
						</div>
						<div className="header_right_option">
							<AiOutlinePlus className="header_right_option_icon" />
						</div>
					</div>
				</div>
			</div>
			<div className="body">
				<div className="stories">
					<div className="story">
						<img
							src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HByBphKaqIsAX8jP4lu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-_qsIUmyQvuDbXiXxvQwvuU7C3YbZFw7gWahzgA__tgQ&oe=62DE3E78"
							className="story_img"
						/>
						<div className="story_hide">
							<p className="story_hide_text">Tạo tin</p>
						</div>
						<div className="story_plus">
							<AiOutlinePlus />
						</div>
					</div>

					<div className="story">
						<img
							src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t51.36329-10/290704237_577609577270535_1844934764933459578_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=JTWFqrHY9NoAX8K_Vli&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-Qn2J5nmm_jqV7ZZBhbh_30le40YVzG1yP4EsOl_wsSg&oe=62BD8560"
							className="story_img_content"
						/>
						<div className="story_avatar">
							<img
								src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/275484166_1835598143297243_1626440728229677697_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RGW4GIoGsDcAX_O5SFC&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT87HBW8oy0KXgmhxBavybtmXBgu3oquyt5sjPRVzT_ZDg&oe=62BD20AF"
								className="story_avatar_img"
							/>
						</div>
						<p className="story_name">Bảo Thy</p>
					</div>
					{context.user.map((user) => (
						<div className="story">
							<img src={user.picture.large} className="story_img_content" />
							<div className="story_avatar">
								<img
									src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/275484166_1835598143297243_1626440728229677697_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RGW4GIoGsDcAX_O5SFC&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT87HBW8oy0KXgmhxBavybtmXBgu3oquyt5sjPRVzT_ZDg&oe=62BD20AF"
									className="story_avatar_img"
								/>
							</div>
							<p className="story_name">{user.name.last}</p>
						</div>
					))}
				</div>
				<div className="create">
					<div className="create-top">
						<img
							src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HByBphKaqIsAX8jP4lu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-_qsIUmyQvuDbXiXxvQwvuU7C3YbZFw7gWahzgA__tgQ&oe=62DE3E78"
							className="create_top_avatar"
						/>
						<div className="create_top_search">
							<input
								type="text"
								className="create_top_search_input"
								placeholder="Sang ơi, bạn đang nghĩ gì thế?"
							/>
						</div>
					</div>
					<div className="create_bottom">
						<div className="create_bottom_option">
							<AiOutlineVideoCamera className="create_bottom_option_icon" />
							<p className="create_bottom_option_text">Video trực tiếp</p>
						</div>
						<div className="create_bottom_option">
							<AiOutlineVideoCamera className="create_bottom_option_icon" />
							<p className="create_bottom_option_text">Video trực tiếp</p>
						</div>
						<div className="create_bottom_option">
							<AiOutlineVideoCamera className="create_bottom_option_icon" />
							<p className="create_bottom_option_text">Video trực tiếp</p>
						</div>
					</div>
				</div>
				<div className="meet">
					<div className="meet_create">
						<BiVideoPlus className="meet_create_icon" />
						<p className="meet_create_text">Tạo phòng họp mặt</p>
					</div>
					{[1, 2, 3, 4, 5, 6, 6, 7].map(() => (
						<div className="meet_create_option">
							<img
								src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/275484166_1835598143297243_1626440728229677697_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RGW4GIoGsDcAX_O5SFC&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT87HBW8oy0KXgmhxBavybtmXBgu3oquyt5sjPRVzT_ZDg&oe=62BD20AF"
								className="meet_create_option_avatar"
							/>
						</div>
					))}
				</div>
				<div className="feed">
					<div className="status">
						<div className="status_header">
							<div className="status_header_left">
								<img
									src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/50647881_2250014605241986_5967675986265767936_n.png?stp=cp0_dst-png_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=ZsqD31JJJtwAX84GVqD&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9cx-5WdK0jt8qG6wmkfr3qR5FGVuaGKvmEwp3Nhadsqg&oe=62DE8B02"
									className="status_header_avatar"
								/>
								<div className="status_header_title">
									<p>Bạn biết chưa?</p>
									<span>36 phút .</span>
								</div>
							</div>
							<div className="status_header_right">
								<BsThreeDots />
							</div>
						</div>
						<div className="status_content">
							<p>Bạn nghĩ sao 🤔</p>
						</div>
						<div className="status_picture">
							<img
								src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/290534059_3208628722713898_3299982633226087594_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=X1umkbqTNPAAX-FqDOb&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT_swg3s7o-0_-7Pxc1bMgRSoxPkVrOzda4g-qyToR-ytw&oe=62BD15E0"
								className="status_picture_img"
							/>
						</div>
						<div className="status_bottom">
							<div className="status_bottom_on">
								<div className="status_bottom_on_emotion">
									<img
										src="https://iconape.com/wp-content/png_logo_vector/facebook-reaction-like.png"
										className="status_bottom_on_likeimg"
									/>
									<p>200</p>
								</div>
								<div className="status_bottom_on_comment">
									<p>4 bình luận</p>
								</div>
							</div>
							<div className="status_bottom_down">
								<div className="status_bottom_option">
									<AiOutlineLike className="status_bottom_option_icon" />
									<p>Thích</p>
								</div>
								<div className="status_bottom_option">
									<AiOutlineLike className="status_bottom_option_icon" />
									<p>Thích</p>
								</div>
								<div className="status_bottom_option">
									<AiOutlineLike className="status_bottom_option_icon" />
									<p>Thích</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
