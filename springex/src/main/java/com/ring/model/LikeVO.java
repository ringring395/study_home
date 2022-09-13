package com.ring.model;

public class LikeVO {
	private int lno;		//좋아요글번호
	private int lcnt;		//좋아요 갯수
	private int bno;		//글번호
	private String id;		//아이디
	private Boolean mylike;	//좋아요클릭여부
	
	
	public int getLno() {
		return lno;
	}
	public void setLno(int lno) {
		this.lno = lno;
	}
	public int getLcnt() {
		return lcnt;
	}
	public void setLcnt(int lcnt) {
		this.lcnt = lcnt;
	}
	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Boolean getMylike() {
		return mylike;
	}
	public void setMylike(Boolean mylike) {
		this.mylike = mylike;
	}
	@Override
	public String toString() {
		return "LikeVO [lno=" + lno + ", lcnt=" + lcnt + ", bno=" + bno + ", id=" + id + ", mylike=" + mylike + "]";
	}
	
	

}
