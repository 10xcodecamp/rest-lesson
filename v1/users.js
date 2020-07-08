// users resource
router.post("/", async (req, res) => {
   // Create a new user
});

router.post("/auth", async (req, res) => {
   // Authorizing a user
   // Return this user's data
});

// Depends on use case
router.get("/:loadoutId", async (req, res) => {
   // api/v1/users/67961bbf-adc3-42fd-a890-bd806e0be248
   // Get all users that are authorized for a loadout

   const loadoutId = req.params.loadoutId;
});

// Depends on use case
router.get("/", async (req, res) => {
   // api/v1/users/?loadout=67961bbf-adc3-42fd-a890-bd806e0be248&status=1
   // Get all users that are authorized for a loadout

   const loadoutId = req.query.loadout;
   const status = req.query.status;
});
