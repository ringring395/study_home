package com.ring.model;

public class SignupVO {
	private String id;		//아이디
	private String pw;		//비번
	private String addr;	//주소
	private String phone;	//전화번호
	private String email;	//이메일
	private String name;	//이름
	private int age;		//나이
	//getter&setter
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}	
	
	@Override
	public String toString() {
		return "SignupVO [id=" + id + ", pw=" + pw 
				+ ", addr=" + addr + ", phone=" + phone 
				+ ", email=" + email + ", name=" + name 
				+ ", age=" + age + "]";
	}
}
















