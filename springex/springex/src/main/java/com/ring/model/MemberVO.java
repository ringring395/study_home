package com.ring.model;

public class MemberVO {
	//MySQL의 member테이블
	//id
	private String id;
	//pw
	private String pw;
	//주소 addr
	private String addr;
	//전화번호 phone
	private String phone;
	//email
	private String email;
	//이름 name
	private String name;
	//나이 age
	private int age;
	
	//getter&setter 생성
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
	
	//toString
	@Override
	public String toString() {
		return "MemberVO [id=" + id + ", pw=" + pw + ", addr=" + addr + ", phone=" + phone + ", email=" + email
				+ ", name=" + name + ", age=" + age + "]";
	}	
}
