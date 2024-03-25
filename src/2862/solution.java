public class Solution {

	public void methodBody() {
		System.out.println("Methods for external classes");
		new Heart().beat();
	}

	public class Heart {
		public void beat() {
			System.out.println("Heartbeat");
		}
	}
}