package Demo7;

class Person { // �����˵���
	private int age; // ����
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
//	���ܣ��Ƚ��Ƿ���ͬ����
	public boolean compareByAge(Person other) {
		return this.age == other.age;
	}
}