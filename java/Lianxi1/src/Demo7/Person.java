package Demo7;

class Person { // 描述人的类
	private int age; // 年龄
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
//	功能：比较是否是同龄人
	public boolean compareByAge(Person other) {
		return this.age == other.age;
	}
}